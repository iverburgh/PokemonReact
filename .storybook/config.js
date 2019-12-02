import { configure } from "@storybook/react";
import requireContext from "require-context.macro";

// automatically import all files ending in *.stories.tsx and *.story.tsx
const req = requireContext("../src/stories", true, /\.(stories|story)\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
