export default function NewContent() {
  return (
    <div className="bg-veryDarkBlue p-6 my-16">
      <p className="text-softOrange text-4xl font-bold">New</p>
      <NewInnerContent
        title={"Hydrogen VS Electric Cars"}
        body={"Will hydrogen-fueled cars ever catch up to EVs?"}
      />
      <HR />
      <NewInnerContent
        title={"The Downsides of AI Artistry"}
        body={
          "What are the possible adverse effects of on-demand AI image generation?"
        }
      />
      <HR />
      <NewInnerContent
        title={"Is VC Funding Drying Up?"}
        body={
          "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
      />
    </div>
  );
}

interface prop {
  title: string;
  body: string;
}

function NewInnerContent({ title, body }: prop) {
  return (
    <div className="mt-5">
      <p className="text-offWhite text-xl font-bold mb-2">{title}</p>
      <p className="text-grayishBlue">{body}</p>
    </div>
  );
}

function HR() {
  return (
    <div className="flex justify-center my-5">
      <hr className="w-[100vw] my-3 border-line border-grayishBlue" />
    </div>
  );
}
