import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import PropTypes from "prop-types";
import MileageMap from "./MileageMap";
import "./map.css";

const labels = [
  ["A", "B"],
  ["C", "D"],
  ["E", "F"],
  ["G", "H"],
  ["I", "J"],
  ["K", "L"],
  ["M", "N"],
  ["O", "P"],
  ["Q", "R"],
  ["S", "T"],
  ["U", "V"],
  ["W", "X"],
  ["Y", "Z"],
  ["AB", "AC"],
  ["AD", "AE"],
];

class LocationSearchInput extends React.Component {
  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  render() {
    const { wayPoints } = this.props;
    return (
      <>
        {wayPoints &&
          wayPoints.map((point) => (
            <div key={point.id} className="col-md-auto">
              <div style={{ marginBottom: "10px" }} className="col-md-8">
                <PlacesAutocomplete
                  value={point.fromAddress}
                  onChange={(address) =>
                    this.props.handleFromChange(address, point.id)
                  }
                  onSelect={(address) =>
                    this.props.handleFromSelect(address, point.id)
                  }
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div className="autocomplete-root">
                      <input
                        {...getInputProps({
                          placeholder: "Search from ...",
                          className: "location-search-input Map-Input",
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <div
                              style={{ backgroundColor: "#6855er34" }}
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span style={{ zIndex: "9999" }}>
                                {suggestion.description}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>
              <div
                style={{ marginBottom: "10px!important" }}
                className="col-md-8"
              >
                <PlacesAutocomplete
                  value={point.toAddress}
                  onChange={(address) =>
                    this.props.handleToChange(address, point.id)
                  }
                  onSelect={(address) =>
                    this.props.handleToSelect(address, point.id)
                  }
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div className="autocomplete-root">
                      <input
                        {...getInputProps({
                          placeholder: "Search to ...",
                          className: "location-search-input Map-Input",
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <div
                              style={{ backgroundColor: "#6855er34" }}
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </div>
            </div>
          ))}
      </>
    );
  }
}
LocationSearchInput.propTypes = {
  handleFromChange: PropTypes.func,
  handleFromSelect: PropTypes.func,
  handleToChange: PropTypes.func,
  handleToSelect: PropTypes.func,
  handleAddLocation: PropTypes.func,
  handleDeleteLocation: PropTypes.func,
  handleSelectRoute: PropTypes.func,
  wayPoint: PropTypes.array,
};
export default LocationSearchInput;
