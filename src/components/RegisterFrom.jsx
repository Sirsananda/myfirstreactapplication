
import { useState } from "react";

function CompleteForm() {
    const [range, setRange] = useState(50);
    const [color, setColor] = useState("#2563eb");
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        debugger;
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        data.skills = formData.getAll("skills");
        data.notifications = formData.getAll("notifications");
        data.range = range;
        data.color = color;
        console.log(data)
        setSubmittedData(data);
        console.log("Submitted form:", data);
    };

    const handleReset = (event) => {
        event.currentTarget.form?.reset();
        setRange(50);
        setColor("#2563eb");
        setSubmittedData(null);
    };

    const inputClass =
        "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

    const labelClass =
        "block text-sm font-medium text-slate-700";

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-10">
            <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-lg sm:p-10">
                <h1 className="text-3xl font-bold text-slate-900">
                    Complete Form Example
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                    Explore common HTML form elements using React and Tailwind CSS.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                    {/* Hidden input */}
                    <input
                        type="hidden"
                        name="formType"
                        value="registration"
                    />

                    {/* 1. Personal Information */}
                    <section>
                        <h2 className="mb-4 border-b pb-2 text-xl font-semibold text-blue-700">
                            1. Personal Information
                        </h2>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label className={labelClass} htmlFor="name">
                                    Full Name *
                                </label>
                                <input
                                    className={inputClass}
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    minLength={2}
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="email">
                                    Email *
                                </label>
                                <input
                                    className={inputClass}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="password">
                                    Password *
                                </label>
                                <input
                                    className={inputClass}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Minimum 8 characters"
                                    minLength={8}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    className={inputClass}
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 9876543210"
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="age">
                                    Age
                                </label>
                                <input
                                    className={inputClass}
                                    id="age"
                                    name="age"
                                    type="number"
                                    min="18"
                                    max="100"
                                    placeholder="Enter age"
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="birthDate">
                                    Date of Birth
                                </label>
                                <input
                                    className={inputClass}
                                    id="birthDate"
                                    name="birthDate"
                                    type="date"
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="time">
                                    Preferred Time
                                </label>
                                <input
                                    className={inputClass}
                                    id="time"
                                    name="time"
                                    type="time"
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="appointment">
                                    Appointment Date and Time
                                </label>
                                <input
                                    className={inputClass}
                                    id="appointment"
                                    name="appointment"
                                    type="datetime-local"
                                />
                            </div>
                        </div>
                    </section>

                    {/* 2. Radio Buttons */}
                    <section>
                        <h2 className="mb-4 border-b pb-2 text-xl font-semibold text-blue-700">
                            2. Radio Buttons
                        </h2>

                        <p className={labelClass}>Gender</p>

                        <div className="mt-3 flex flex-wrap gap-6">
                            {["Male", "Female", "Other"].map((item) => (
                                <label
                                    key={item}
                                    className="flex items-center gap-2 text-sm text-slate-700"
                                >
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={item}
                                        className="accent-blue-600"
                                        required
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* 3. Dropdowns */}
                    <section>
                        <h2 className="mb-4 border-b pb-2 text-xl font-semibold text-blue-700">
                            3. Dropdown Elements
                        </h2>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label className={labelClass} htmlFor="country">
                                    Country
                                </label>
                                <select
                                    className={inputClass}
                                    id="country"
                                    name="country"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>
                                        Select country
                                    </option>
                                    <option value="India">India</option>
                                    <option value="USA">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="department">
                                    Department
                                </label>
                                <select
                                    className={inputClass}
                                    id="department"
                                    name="department"
                                >
                                    <option value="IT">IT</option>
                                    <option value="HR">Human Resources</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="skills">
                                    Skills (Select multiple)
                                </label>
                                <select
                                    className={inputClass}
                                    id="skills"
                                    name="skills"
                                    multiple
                                    size={4}
                                >
                                    <option value="React">React</option>
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="Tailwind">Tailwind CSS</option>
                                    <option value="CSharp">C#</option>
                                    <option value="SQL">SQL Server</option>
                                </select>
                                <p className="mt-1 text-xs text-slate-500">
                                    Hold Ctrl (Windows) or Command (Mac) to select multiple.
                                </p>
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="search">
                                    Search
                                </label>
                                <input
                                    className={inputClass}
                                    id="search"
                                    name="search"
                                    type="search"
                                    placeholder="Search anything..."
                                />
                            </div>
                        </div>
                    </section>

                    {/* 4. Checkboxes */}
                    <section>
                        <h2 className="mb-4 border-b pb-2 text-xl font-semibold text-blue-700">
                            4. Checkboxes
                        </h2>

                        <p className={labelClass}>Notification Preferences</p>

                        <div className="mt-3 flex flex-wrap gap-6">
                            {[
                                ["Email", "Receive email notifications"],
                                ["SMS", "Receive SMS notifications"],
                                ["WhatsApp", "Receive WhatsApp notifications"],
                            ].map(([value, text]) => (
                                <label
                                    key={value}
                                    className="flex items-center gap-2 text-sm text-slate-700"
                                >
                                    <input
                                        type="checkbox"
                                        name="notifications"
                                        value={value}
                                        className="size-4 accent-blue-600"
                                    />
                                    {text}
                                </label>
                            ))}
                        </div>

                        <label className="mt-5 flex items-center gap-2 text-sm text-slate-700">
                            <input
                                type="checkbox"
                                name="terms"
                                value="accepted"
                                required
                                className="size-4 accent-blue-600"
                            />
                            I agree to the terms and conditions.
                        </label>
                    </section>

                    {/* 5. Additional Inputs */}
                    <section>
                        <h2 className="mb-4 border-b pb-2 text-xl font-semibold text-blue-700">
                            5. Additional Input Types
                        </h2>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label className={labelClass} htmlFor="website">
                                    Website URL
                                </label>
                                <input
                                    className={inputClass}
                                    id="website"
                                    name="website"
                                    type="url"
                                    placeholder="https://example.com"
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="favoriteColor">
                                    Favorite Color
                                </label>
                                <div className="mt-1 flex items-center gap-3">
                                    <input
                                        id="favoriteColor"
                                        name="favoriteColor"
                                        type="color"
                                        value={color}
                                        onChange={(event) => setColor(event.target.value)}
                                        className="h-11 w-16 cursor-pointer rounded border border-slate-300 p-1"
                                    />
                                    <span className="text-sm text-slate-500">
                                        {color}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="resume">
                                    Upload Resume
                                </label>
                                <input
                                    className="mt-1 block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-medium file:text-blue-700 hover:file:bg-blue-100"
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="range">
                                    Experience Level: {range}%
                                </label>
                                <input
                                    className="mt-3 w-full accent-blue-600"
                                    id="range"
                                    name="range"
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={range}
                                    onChange={(event) =>
                                        setRange(Number(event.target.value))
                                    }
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="bio">
                                    About You
                                </label>
                                <textarea
                                    className={inputClass}
                                    id="bio"
                                    name="bio"
                                    rows={4}
                                    maxLength={500}
                                    placeholder="Write something about yourself..."
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="month">
                                    Joining Month
                                </label>
                                <input
                                    className={inputClass}
                                    id="month"
                                    name="month"
                                    type="month"
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="week">
                                    Preferred Week
                                </label>
                                <input
                                    className={inputClass}
                                    id="week"
                                    name="week"
                                    type="week"
                                />
                            </div>
                        </div>
                    </section>

                    {/* 6. Form Actions */}
                    <div className="flex flex-wrap justify-end gap-3 border-t pt-6">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            Reset
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>

                {/* Submission Result */}
                {submittedData && (
                    <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-5">
                        <h2 className="text-lg font-semibold text-green-800">
                            Form submitted successfully!
                        </h2>
                        <p className="mt-1 text-sm text-green-700">
                            Check the browser console to inspect the submitted data.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CompleteForm;