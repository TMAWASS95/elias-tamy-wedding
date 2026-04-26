import { useForm } from "react-hook-form";

export default function RSVP() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("RSVP sent!");
  };

  return (
    <section className="section">
      <h2>RSVP</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input placeholder="Name" {...register("name")} />

        <select {...register("status")}>
          <option value="yes">Accept</option>
          <option value="no">Decline</option>
        </select>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
