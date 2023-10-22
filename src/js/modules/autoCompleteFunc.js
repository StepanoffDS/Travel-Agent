import autoComplete from "@tarekraafat/autocomplete.js"
import countryList from "./../helpers/countryList"

function autoCompleteFunc() {
  const autoCompleteJS = new autoComplete({
    selector: "#autoCompleteCountry",

    data: {
      src: countryList,
      keys: ["name"],
    },

    resultItem: {
      highlight: true,
    },

    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection.name;
        }
      },
    },

  })
}

export default autoCompleteFunc