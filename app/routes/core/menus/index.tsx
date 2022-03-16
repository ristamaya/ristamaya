import { Form } from "remix";
import { Input } from "~/application/uicomponents/input";
import * as MenusAction from "~/application/actions/menus";
import { Button } from "~/application/uicomponents/button";
import { useState } from "react";

// async function action(request: Request) {}

function Menus() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="relative items-center justify-center p-5">
      <Form
        className="relative border rounded-md shadow-md p-4 w-fit h-fit m-auto bg-theme-muted"
        method="post"
      >
        <div className="mt-3 mb-9 text-center text-theme-strong text-lg ">
          Menu Editor
        </div>
        <Input
          name="parent"
          label="Parent"
          className="w-28"
          errorMessage={errorMessage}
        />
        <Input
          name="title"
          label="Title"
          className="w-28"
          errorMessage={errorMessage}
        />
        <Input
          name="title"
          label="Title"
          className="w-28"
          errorMessage={errorMessage}
        />
        <Input
          name="title"
          label="Title"
          className="w-28"
          errorMessage={errorMessage}
        />

        <div>
          <Button className="w-18" label="Save" />
        </div>
      </Form>
    </div>
  );
}

export default Menus;
