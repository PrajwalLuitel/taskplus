import openai from "@/openai";

export async function POST(request: Request) {
  const { todos } = await request.json();

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "when responding, welcome the user always as User and say welcome to TaskPlus App! Limit the response to 200 characters",
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day ! here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });


  return Response.json(completion.choices[0].message);
}

// export async function POST(request: Request) {
//   const { todos } = await request.json();
//   console.log("I am here inside the post request", todos);
//   // communicate with openAI

//   return Response.json(data.choices[0].message);
// }
