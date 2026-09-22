import Handlebars from 'handlebars';

Handlebars.helpers.eq = (value, expected) => value === expected;

export default Handlebars;