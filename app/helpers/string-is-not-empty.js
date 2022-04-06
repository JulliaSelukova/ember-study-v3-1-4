import { helper } from '@ember/component/helper';

export function stringIsNotEmpty([str]/*params, str*/) {
  let strIsNotEmpty = false;

  if (str != null && str != "" && str != undefined)
    strIsNotEmpty = true;

  return strIsNotEmpty;
}

export default helper(stringIsNotEmpty);
