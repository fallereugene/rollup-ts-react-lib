import { CreateTemplate } from "@storybook-helpers";
import { InputText, InputTextProps } from "./index";

const defaultProps: InputTextProps = {
  errorText: "",
  label: "main_input_label",
  disabled: false,
  name: "",
  type: "text",
  value: "",
  onBlur: () => {},
  onChange: () => {},
};

export default {
  title: "Components/DynamicFormGenerator/Control/InputText",
  component: InputText,
};

export const Normal = CreateTemplate(InputText, {
  ...defaultProps,
});

export const Disabled = CreateTemplate(InputText, {
  ...defaultProps,
  disabled: true,
});

export const WithErrorText = CreateTemplate(InputText, {
  ...defaultProps,
  errorText: "With error text",
});

export const WithDefaultValue = CreateTemplate(InputText, {
  ...defaultProps,
  value: "With default value",
});

export const WithLabel = CreateTemplate(InputText, {
  ...defaultProps,
  label: "main_input_label",
});
