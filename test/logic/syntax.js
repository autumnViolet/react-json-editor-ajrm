import testSyntaxLogic from './testSyntaxLogic';
import sampleData from "./../sampleData";

function run() {
  testSyntaxLogic('JS', 'Basic Sample', sampleData.basic, {
    jsObject: { ...sampleData.basic },
    json: `{"hello":"world","foo":"bar"}`,
    lines: 5,
    noSpaces: `{hello:'world',foo:'bar'}`,
    tokens: [
      { depth: 1, string: '{', type: 'symbol', value: '{' },
      { depth: 1, string: 'hello', type: 'key', value: 'hello' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'world'", type: 'string', value: "'world'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: 'foo', type: 'key', value: 'foo' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'bar'", type: 'string', value: "'bar'" },
      { depth: 0, string: '}', type: 'symbol', value: '}' }
    ]
  });

  testSyntaxLogic('JS', 'Common Sample', sampleData.common, {
    jsObject: { ...sampleData.common },
    json: "{\"strings\":[\"xyz\",\"This is a test\",\"+_)(*&^%$#@!~/|}{:?/.,;][=-`\"],\"numbers\":[0,1,-100,-7.5,500,1.823],\"primitives\":[false,true]}",
    lines: 20,
    noSpaces: "{strings:['xyz','This is a test','+_)(*&^%$#@!~/|}{:?/.,;][=-`'],numbers:[0,1,-100,-7.5,500,1.823],primitives:[false,true]}",
    tokens: [
      { depth: 1, string: '{', type: 'symbol', value: '{' },
      { depth: 1, string: 'strings', type: 'key', value: 'strings' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 2, string: '[', type: 'symbol', value: '[' },
      { depth: 2, string: "'xyz'", type: 'string', value: "'xyz'" },
      { depth: 2, string: ',', type: 'symbol', value: ',' },
      { depth: 2, string: "'This is a test'", type: 'string', value: "'This is a test'" },
      { depth: 2, string: ',', type: 'symbol', value: ',' },
      { depth: 2, string: "'+_)(*&^%$#@!~/|}{:?/.,;][=-`'", type: 'string', value: "'+_)(*&^%$#@!~/|}{:?/.,;][=-`'" },
      { depth: 1, string: ']', type: 'symbol', value: ']' },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: 'numbers', type: 'key', value: 'numbers' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 2, string: '[', type: 'symbol', value: '[' },
      { depth: 2, string: '0', type: 'number', value: 0 },
      { depth: 2, string: ',', type: 'symbol', value: ',' },
      { depth: 2, string: '1', type: 'number', value: 1 },
      { depth: 2, string: ',', type: 'symbol', value: ',' },
      { depth: 2, string: '-100', type: 'number', value: -100 },
      { depth: 2, string: ',', type: 'symbol', value: ',' },
      { depth: 2, string: '-7.5', type: 'number', value: -7.5 },
      { depth: 2, string: ',', type: 'symbol', value: ',' },
      { depth: 2, string: '500', type: 'number', value: 500 },
      { depth: 2, string: ',', type: 'symbol', value: ',' },
      { depth: 2, string: '1.823', type: 'number', value: 1.823 },
      { depth: 1, string: ']', type: 'symbol', value: ']' },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: 'primitives', type: 'key', value: 'primitives' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 2, string: '[', type: 'symbol', value: '[' },
      { depth: 2, string: 'false', type: 'primitive', value: false },
      { depth: 2, string: ',', type: 'symbol', value: ',' },
      { depth: 2, string: 'true', type: 'primitive', value: true },
      { depth: 1, string: ']', type: 'symbol', value: ']' },
      { depth: 0, string: '}', type: 'symbol', value: '}' }
    ]
  });

  testSyntaxLogic('JS', 'Uncommon Key Names', sampleData.uncommonKeys, {
    jsObject: { ...sampleData.uncommonKeys },
    json: "{\"0\":\"number-like text\",\"true\":true,\"false\":false,\"undefined\":\"undefined\",\"null\":\"null\",\"\":0,\"compound word\":[\"*\"],\"~!@#$%\":\"non-alphanumeric\",\"$\":\"dollar\",\"_\":\"underscore\",\"{}\":\"curly brackets\",\"[]\":\"square brackets\",\"A423423\":\"letter-number\",\"0A\":\"number-letter\",\"A 4\":\"letter-space-number\",\"0 A\":\"number-space-letter\",\"0 A,&\":\"number-space-letter-nonAlphanumeric\"}",
    lines: 22,
    noSpaces: "{0:'number-like text',true:true,false:false,undefined:'undefined',null:'null','':0,'compound word':['*'],'~!@#$%':'non-alphanumeric','$':'dollar',_:'underscore','{}':'curly brackets','[]':'square brackets',A423423:'letter-number','0A':'number-letter','A 4':'letter-space-number','0 A':'number-space-letter','0 A,&':'number-space-letter-nonAlphanumeric'}",
    tokens: [
      { depth: 1, string: '{', type: 'symbol', value: '{' },
      { depth: 1, string: '0', type: 'key', value: '0' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'number-like text'", type: 'string', value: "'number-like text'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: 'true', type: 'key', value: 'true' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: 'true', type: 'primitive', value: true },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: 'false', type: 'key', value: 'false' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: 'false', type: 'primitive', value: false },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: 'undefined', type: 'key', value: 'undefined' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'undefined'", type: 'string', value: "'undefined'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: 'null', type: 'key', value: 'null' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'null'", type: 'string', value: "'null'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "''", type: 'key', value: "''" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: '0', type: 'number', value: 0 },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "'compound word'", type: 'key', value: "'compound word'" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 2, string: '[', type: 'symbol', value: '[' },
      { depth: 2, string: "'*'", type: 'string', value: "'*'" },
      { depth: 1, string: ']', type: 'symbol', value: ']' },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "'~!@#$%'", type: 'key', value: "'~!@#$%'" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'non-alphanumeric'", type: 'string', value: "'non-alphanumeric'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "'$'", type: 'key', value: "'$'" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'dollar'", type: 'string', value: "'dollar'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: '_', type: 'key', value: '_' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'underscore'", type: 'string', value: "'underscore'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "'{}'", type: 'key', value: "'{}'" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'curly brackets'", type: 'string', value: "'curly brackets'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "'[]'", type: 'key', value: "'[]'" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'square brackets'", type: 'string', value: "'square brackets'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: 'A423423', type: 'key', value: 'A423423' },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'letter-number'", type: 'string', value: "'letter-number'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "'0A'", type: 'key', value: "'0A'" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'number-letter'", type: 'string', value: "'number-letter'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "'A 4'", type: 'key', value: "'A 4'" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'letter-space-number'", type: 'string', value: "'letter-space-number'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "'0 A'", type: 'key', value: "'0 A'" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'number-space-letter'", type: 'string', value: "'number-space-letter'" },
      { depth: 1, string: ',', type: 'symbol', value: ',' },
      { depth: 1, string: "'0 A,&'", type: 'key', value: "'0 A,&'" },
      { depth: 1, string: ':', type: 'symbol', value: ':' },
      { depth: 1, string: "'number-space-letter-nonAlphanumeric'", type: 'string', value: "'number-space-letter-nonAlphanumeric'" },
      { depth: 0, string: '}', type: 'symbol', value: '}' }
    ]
  });
}

export default run;

/**
 * TODO - Add missing Syntax Logic validations:
 * 1. Quotes in key and string notations and nested. I.e.   "" ''  ``
 * 2. Escape character. I.e \
 * 3. Html Tags and stand alone reserved words I.e. <pre> <div>  <> >< <br/>
 * 
 * 6. Provide invalid information, validate warnings
 **/