export async function POST(request : Request) {
    let req : { email :string , name :string , preferences :string[]} = await request.json();
    const { email, name, preferences } = req;
    const klaviyoResponse = await fetch('https://a.klaviyo.com/api/v2/list/SsYS4f/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.API_KEY as string,
        },
        body: JSON.stringify({
          profiles: [{ email, first_name: name, preferences :preferences[0] }],
        }),
      });
   
    return Response.json(klaviyoResponse)
  }