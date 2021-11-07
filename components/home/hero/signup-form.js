import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useState } from "react";

const signupSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email address").required("Please enter a valid email address")
});

const initialValues = {
    email: ""
};

export default function SignupForm() {
    const router = useRouter();

    const handleSubmit = async (form) => {
        try {
            axios.post("/api/form-submission", { name: "Start for free", form });
            router.push(`/start?email=${form.email}`);
        }
        catch (error) {
            alert("There was an error registering your interest. Please try again later.");
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={signupSchema}
        >
            {({ handleSubmit, values, handleBlur, handleChange, errors, submitCount }) => (
                <form className="flex flex-col space-y-1 w-full" onSubmit={handleSubmit}>
                    <div className="bg-white rounded-md p-1 pl-3 flex flex-row space-x-1 text-sm justify-between">
                        <input
                            className="bg-transparent w-full focus:outline-none"
                            placeholder="Enter your email address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="email"
                            id="signup-email"
                        />
                        <button
                            type="submit"
                            className={`
                                flex-shrink-0 rounded-md bg-candy-500 text-white focus:outline-none
                                hover:bg-candy-700 px-5 py-3 font-medium
                                tracking-wide text-white
                            `}
                        >
                            Start for free
                        </button>
                    </div>

                    <div className="w-full text-white text-xs text-left pl-2">
                        {submitCount > 0 && (Object.values(errors).length > 0) &&
                            (Object.values(errors)[0])                            
                        }
                    </div>
                </form>
            )}
        </Formik>
    );
}