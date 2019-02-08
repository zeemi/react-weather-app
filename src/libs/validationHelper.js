const validationRulesMap = {
  required: (value) => {
    if (Array.isArray(value)) {
      return value.some((item) => {
        return item;
      });
    }
    return !!value;
  },
  email: (value) => {
    const validationRgexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validationRgexp.test(String(value).toLowerCase());
  },
  phone: (value) => {
    const validationRgexp = /^([+][0-9]{11,12}|[0-9]{9})$/;
    return validationRgexp.test(String(value));
  },
};

export const validate = (value, validationRules) => {
  if (!validationRules) {
    return { isValid: true, errors: [] };
  }
  const errors = validationRules
    .map((validationRule) => {
      if (validationRulesMap[validationRule.rule]) {
        const isValid = validationRulesMap[validationRule.rule](value);
        return !isValid ? validationRule.error : undefined;
      } else {
        console.warn(`validation function "${validationRule.rule}" is not implemented`);
        return null;
      }
    })
    .filter((error) => {
      return error;
    });
  return { isValid: !errors.length, errors: errors };
};
