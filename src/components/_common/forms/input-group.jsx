import { css } from '@emotion/react/macro';

function InputGroup({ children }) {
  const InputGroupCSS = css`
    margin-bottom: 30px;

    p {
      font-weight: bold;
      font-size: 15px;

      small {
        font-weight: normal;
      }
    }

    div + p {
      margin-top: 25px;
    }
  `;

  return <div css={InputGroupCSS}>{children}</div>;
}

export default InputGroup;
