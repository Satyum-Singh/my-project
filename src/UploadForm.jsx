import React, { useState } from "react";


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("No file selected.");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileName = file.name;
        setSelectedFileName(fileName);
        if (file.type === "text/csv") {
            setFile(file);
        } else {
            alert("Please select a .csv file.");
            event.target.value = "";
        }
    };

    const handlePredict = () => {
        return file;
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="bg-black border border-white/50 text-white/80 rounded-xl px-14 py-10 mb-4 w-[35rem]">
                <p className="font-bold text-xl text-neutral-800 dark:text-neutral-200">Click here to unlock the real,
                    <div className="text-lg bg-clip-text bg-gradient-to-l from-[#928DAB] via-slate-400 to-[#1F1C2C]">
                        <h1 className="text-transparent">Potential</h1>
                    </div>
                </p>
                <p className="text-pretty mt-4 tracking-normal w-full px-6 mb-8 font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do risus commodo viverra maecenas.
                </p>
                <div className="flex flex-col justify-center items-center">
                    <label className="flex flex-col items-center gap-2 font-medium text-gray-300">
                        <span className="mb-3 cursor-pointer ring-1 hover:ring-white/50 hover:scale-110 hover:-translate-y-1 hover:transition-all delay-100  duration-300 ease-in-out text-white/80 hover:text-white font-normal tracking-wider py-2 px-14 rounded-full w-fit  text-center">Upload</span>
                        <div className="mt-1 flex items-center gap-4">
                            <input
                                multiple
                                type="file"
                                accept=".csv"
                                className="sr-only"
                                id="csv-file-input"
                                onChange={handleFileChange}
                            />
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                            >
                                
                                <span className="ml-2">Select a file</span>
                            </button>
                            <div className="flex-shrink-0">
                                <span id="selected-file-name" className="text-sm text-gray-500">{selectedFileName}</span>
                            </div>
                        </div>
                    </label>
                    <div className="flex flex-col items-center justify-between">
                        <a
                            className="cursor-pointer ring-1 hover:ring-white/50 hover:scale-110 hover:-translate-y-1 hover:transition-all delay-100  duration-300 ease-in-out text-white/80 hover:text-white font-normal tracking-wider py-2 px-14 rounded-full  mt-6 w-fit  text-center"
                            type="button"
                            onClick={handlePredict}
                            download
                        >
                            Predict
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UploadForm;