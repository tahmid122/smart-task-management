export const getFormData = (form) => {
  if (!form) return "send e.target";
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  return data;
};
