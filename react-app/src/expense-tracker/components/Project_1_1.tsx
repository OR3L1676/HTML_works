import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ListGroup from "../../assets/components/ListGroup/ListGroup";

const schema = z.object({
  description: z.string().min(3),
  amount: z.number(),
});

type FormData = z.infer<typeof schema>;

const Project_1_1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            {...register("description")}
            id="description"
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-row align-items-center">
          <div className="">
            <label htmlFor="category">category</label>
          </div>
          <div className="select mb-3">
            <select className="custom-select" id="category">
              <option defaultValue="...">...</option>
              <option value="1">Playstation 5</option>
              <option value="2">Xbox Series X</option>
              <option value="3">Nitendo Switch</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" value="Submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Project_1_1;
