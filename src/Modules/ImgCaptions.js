let captions = {};
const url =
  "https://res.cloudinary.com/badgerdad/image/list/streetsampler.json";

function fetchCaptions() {
  captions["streetsampler"] = {};
  fetch(url)
    .then(resp => resp.json())
    .then(resp => {
      resp.resources.forEach(image => {
        let id = image.public_id.slice(15);
        let caption = image.context.custom.caption
          ? image.context.custom.caption
          : "Untitled";
        captions["streetsampler"][id] = caption;
      });
    });
  return captions;
}

export default fetchCaptions;
