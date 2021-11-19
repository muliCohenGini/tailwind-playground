import { useState } from "react"

export const DynamicTextArea = () => {
    const [textContent, setTextContent] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextContent(event.target.value);
    }

    return (
        <div className="mt-4 text-black">
          <textarea
            onChange={handleChange}
          >
          </textarea>
          <h2 className="text-white">{textContent}</h2>
      </div>
    )
}