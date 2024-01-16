import {
  ControlsContainer,
  ControlsButton,
  ControlsDisplay,
} from "./Controls.styled";

export default function Controls({ longitude, latitude, onRefreshProp }) {
  return (
    <ControlsContainer>
      <ControlsDisplay>Lat: {longitude.toFixed(5)}</ControlsDisplay>
      <ControlsDisplay>Long: {latitude.toFixed(5)}</ControlsDisplay>
      <ControlsButton type="button" onClick={onRefreshProp}>
        Refresh
      </ControlsButton>
    </ControlsContainer>
  );
}
