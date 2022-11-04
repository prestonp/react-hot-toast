import * as goober from "goober";

export let css = goober.css;
export let keyframes = goober.keyframes;
export let styled = goober.styled;
export let setup = goober.setup;

export function bindStyling(target: Element) {
  css = css.bind({ target });
  styled = styled.bind({ target });
}
