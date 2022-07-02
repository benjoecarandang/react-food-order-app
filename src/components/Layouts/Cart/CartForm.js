import Input from "../../UI/Input";
import tw, { styled } from "twin.macro";

const CartForm = (props) => {
  return (
    <div className="pr-5">
			<div class="text-xl font-semibold mb-5">Contact Information</div>
			<hr className="pb-7"></hr>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
						<Input options={{
								id: "firstname",
								type: "text",
								label: "First name",
								placeholder: "First name"
							}}
						/>
          </div>
					<div className="w-full md:w-1/2 px-3">
						<Input options={{
								id: "lastname",
								type: "text",
								label: "Last name",
								placeholder: "Last name"
							}}
						/>
					</div>
        </div>

				<div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
						<Input options={{
								id: "email",
								type: "text",
								label: "Email Address",
								placeholder: "Email Address"
							}}
						/>
          </div>
        </div>
				<div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
						<Input options={{
								id: "company",
								type: "text",
								label: "Company",
								placeholder: "Company"
							}}
						/>
          </div>
        </div>
				<div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
						<Input options={{
								id: "address",
								type: "text",
								label: "Address",
								placeholder: "Address"
							}}
						/>
          </div>
        </div>

				<StyledButton>Confirm Order</StyledButton>
      </form>
    </div>
  );
};

const StyledButton = styled.button(
	tw`text-white
	bg-gradient-to-br
	from-pink-500
	to-yellow-500
	hover:bg-gradient-to-bl
	focus:ring-4
	focus:outline-none
	focus:ring-pink-200
	dark:focus:ring-pink-800
	font-medium rounded-lg
	text-sm pl-6
	pr-7
	py-2.5
	text-center
	w-full`
);

export default CartForm;
