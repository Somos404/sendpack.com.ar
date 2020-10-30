import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import PropTypes from "prop-types";

class locationSearchFrom extends React.Component {
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
                  style={{ 
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    marginTop: "2.5em",
                    background: "none",
                    fontFamily: "Roboto"
                  }}
                  {...getInputProps({
                    placeholder: "DESTINO",
                    className: "location-search-input Map-Input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Cargando...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "none", cursor: "pointer" }
                      : { backgroundColor: "none", cursor: "pointer" };
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
         ))}
      </>
    );
  }
}
locationSearchFrom.propTypes = {
  handleFromChange: PropTypes.func,
  handleFromSelect: PropTypes.func,
  handleToChange: PropTypes.func,
  handleToSelect: PropTypes.func,
  handleAddLocation: PropTypes.func,
  handleDeleteLocation: PropTypes.func,
  handleSelectRoute: PropTypes.func,
  wayPoint: PropTypes.array,
};
export default locationSearchFrom;
