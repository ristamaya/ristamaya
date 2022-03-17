import { Form } from "remix";
import { Input } from "~/application/uicomponents/input";
import * as MenusAction from "~/application/actions/menus";
import { Button } from "~/application/uicomponents/button";
import { useState } from "react";

// async function action(request: Request) {}

function Menus() {
  const [errorMessage, setErrorMessage] = useState("");
  let menuType = String;

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
          label="Title"
          className="w-96"
          errorMessage={errorMessage}
          name="title"
          type="text"
          placeholder="asdasd"
        />
        <Input
          label="Menu Type"
          className="w-96"
          errorMessage={errorMessage}
          name="menutype"
          type="text"
          inputData={["Menu", "Link"]}
        />
        <Input
          label="Parent"
          className="w-96"
          errorMessage={errorMessage}
          name="parent"
          type="text"
          disabled={true}
        />
        <Input
          label="Path"
          className="w-96"
          errorMessage={errorMessage}
          name="path"
          type="text"
        />
        <Input
          label="Path Type"
          className="w-96"
          errorMessage={errorMessage}
          name="pathtype"
          type="text"
          inputData={["Internal", "External"]}
        />
        <Input
          label="icon"
          className="w-96"
          errorMessage={errorMessage}
          name="icon"
          type="text"
        />

        <div>
          <Button className="w-20" label="Save" type="submit" />
        </div>
      </Form>
    </div>
  );
}

export default Menus;
