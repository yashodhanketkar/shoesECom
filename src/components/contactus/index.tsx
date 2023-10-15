export const ContactUs = () => {
  const handleSubmit = () => {
    alert("Submitted");
  };

  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-12 md:px-24 lg:grid-cols-2">
      <ContactDetails />
      <ContactForm handleSubmit={handleSubmit} />
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="grid items-center justify-around grid-cols-1 gap-2 p-4 md:grid-cols-2 rounded-2xl">
      <div className="flex flex-col gap-1">
        <p className="text-xl font-semibold">Branch Office</p>
        <address className="w-[24ch]">
          SoleCrafters, New Building, Nearby Park, Delhi, India
        </address>
        <a href="tel:+911122334455">+91-1122334455</a>
        <a href="mailto:branch@solecrafter.com">branch@solecrafter.com</a>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xl font-semibold">Main Office</p>
        <address className="w-[24ch]">
          SoleCrafters, Old Building, Nearby Bank, Delhi, India
        </address>
        <a href="tel:+915544332211">+91-5544332211</a>
        <a href="mailto:main@solecrafter.com">main@solecrafter.com</a>
      </div>
    </div>
  );
};

type ContactFormProps = {
  handleSubmit: () => void;
};

const ContactForm = ({ handleSubmit }: ContactFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-4 shadow shadow-black/50 rounded-2xl"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 rounded ring-1 ring-black/25"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="question">Question</label>
        <input
          className="p-2 rounded ring-1 ring-black/25"
          type="question"
          name="question"
          id="question"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="description">Description</label>
        <textarea
          className="p-2 rounded resize-none ring-1 ring-black/25"
          name="description"
          id="description"
          rows={5}
        />
      </div>
      <button
        type="submit"
        className="px-2 py-1 text-white bg-black rounded-md w-fit"
      >
        Submit
      </button>
    </form>
  );
};
