export const getStatusColor = (status) => {
  let item = { bgCss: "badge-light-warning", label: "Pending" };
  // let bgCss = "badge-light-warning"

  switch (status) {
    case "published":
      item.bgCss = "badge-light-success";
      item.label = "Published";
      break;
    case "draft":
      item.bgCss = "badge-light-secondary";
      item.label = "Draft";
      break;

    case "archived":
      item.bgCss = "badge-light-danger";
      item.label = "Cancelled";

    default:
      break;
  }

  return item;
};

export const wordSlice = (text) => {
  if (!text) {
    return `No description given...`;
  }
  const words = text.split(/\s+/); // Split the text by whitespace characters into an array of words
  if (words.length > 10) {
    return `${words.slice(0, 8).join(" ")}....`; // Join the first 50 words back into a string
  } else {
    return `${text}....`; // Return the original text if it has 50 words or less
  }
};
