import huefy, {linear, TransitionOptions} from '../src/index';

describe('Transition between two colors', () => {
  beforeEach(() => {
    // cleanup
  });

  it('Should blend between cmyk and rgb', () => {
    var color1 = 'cmyk(0%,100%,100%,0%)';
    var color2 = 'rgba(0, 255, 0, 1)';
    var value = 0.5;
    var options:TransitionOptions = {curve: linear, as: 'rgba'};
    expect(huefy(color1, color2, value, options)).toBe('rgb(255, 255, 0)');
  });

  // add more tests here
  it('Should blend between hsl and hsv', () => {
    var color1 = 'hsl(120, 100%, 50%)';
    var color2 = 'hsv(120, 100%, 100%)';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'hsl' };
    expect(huefy(color1, color2, value, options)).toBe('hsl(120, 100%, 50%)');
  });

  it('Should blend between rgb and rgba', () => {
    var color1 = 'rgb(255, 0, 0)';
    var color2 = 'rgba(0, 0, 255, 0.5)';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'rgb' };
    expect(huefy(color1, color2, value, options)).toBe('rgb(0, 255, 0)');
  });

  it('Should blend between hsv and hex', () => {
    var color1 = 'hsv(180, 50%, 50%)';
    var color2 = '#FF00FF';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'hsv' };
    expect(huefy(color1, color2, value, options)).toBe('hsv(240°, 75%, 75%)');
  });

    it('Should clamp between 0 - 255', () => {
    var color1 = 'hsv(180, 50%, 50%)';
    var color2 = '#ff00ff33';
    var value = 2;
    var options: TransitionOptions = { curve: linear, as: 'hex' };
    expect(huefy(color1, color2, value, options)).toBe('#ff00ff33');
  });

  it('Should blend between rgba and hex', () => {
    var color1 = 'rgba(0, 0, 255, 0.5)';
    var color2 = '#00FF00';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'rgba' };
    expect(huefy(color1, color2, value, options)).toBe('rgba(0, 255, 255, 0.75)');
  });

  it('Should blend between hex and hsl', () => {
    var color1 = '#FF0000';
    var color2 = 'hsl(240, 100%, 50%)';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'hex' };
    expect(huefy(color1, color2, value, options)).toBe('#00ff00ff');
  });


  it('Should blend between cmyk and unsupported color', () => {
    var color1 = 'cmyk(0%,100%,100%,0%)';
    var color2 = 'reddify';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'cmyk' };
    expect(() => huefy(color1, color2, value, options)).toThrow('Unsupported color format');
  });

  it('Should blend between keyword and hsl', () => {
    var color1 = 'red';
    var color2 = 'hsl(240°, 100%, 50%)';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'rgb' };
    expect(huefy(color1, color2, value, options)).toBe('rgb(0, 255, 0)');
  });

  it('Should blend between cmyk and rgb', () => {
    var color1 = 'cmyk(0%,100%,100%,0%)';
    var color2 = 'rgb(0, 255, 0)';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'cmyk' };
    expect(huefy(color1, color2, value, options)).toBe('cmyk(0%, 0%, 100%, 0%)');
  });

  it('Should blend between unsupported color and hex', () => {
    var color1 = 'something fun';
    var color2 = '#FF00FF';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'hex' };
    expect(() => huefy(color1, color2, value, options)).toThrowError('Unsupported color format');
  });

  it('Should blend between two HSL colors', () => {
    var color1 = 'hsl(0°, 100%, 50%)';
    var color2 = 'hsl(240°, 100%, 50%)';
    var value = 0.5;
    var options: TransitionOptions = { curve: linear, as: 'hsl' };
    expect(huefy(color1, color2, value, options)).toBe('hsl(120, 100%, 50%)');
  });
});