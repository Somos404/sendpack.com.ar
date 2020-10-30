import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));


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
                    style={{ 
                     borderTop: "none",
                     borderLeft: "none",
                     borderRight: "none",
                     marginTop: "3em",
                     background: "none"
                    }}
                    {...getInputProps({
                      placeholder: "ORIGEN",
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
