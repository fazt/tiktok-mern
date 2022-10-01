import { useState } from "react";
import axios from "axios";
import { Input } from "../components/Input";
import Button from "../components/Button";

interface TiktokPost {
  title: string;
  description: string;
  video: File | null;
}

function UploadVideoPage() {
  const [titkok, setTitkok] = useState<TiktokPost>({
    title: "",
    description: "",
    video: null,
  });

  const handleChange = (e: any) => {
    setTitkok({
      ...titkok,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("title", titkok.title);
          formData.append("description", titkok.description);

          if (titkok.video) {
            formData.append("video", titkok.video);
          }

          try {
            const res = await axios.post(
              "http://localhost:3000/videos",
              formData
            );
            console.log(res);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <Input name="title" onChange={handleChange} />
        <Input type="textarea" name="description" onChange={handleChange} />

        <input
          type="file"
          name="video"
          id=""
          onChange={(e) =>
            setTitkok({
              ...titkok,
              video: e.target.files ? e.target.files[0] : null,
            })
          }
        />
        <Button>Upload</Button>
      </form>
    </div>
  );
}

export default UploadVideoPage;
