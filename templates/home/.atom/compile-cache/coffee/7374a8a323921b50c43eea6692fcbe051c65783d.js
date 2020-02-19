(function() {
  var chroma, duo, root, setColors, uno, unsetColors;

  chroma = require('chroma-js');

  root = document.documentElement;

  uno = '';

  duo = '';

  module.exports = {
    activate: function(state) {
      uno = atom.config.get('duotone-dark-syntax.color.uno').toHexString();
      duo = atom.config.get('duotone-dark-syntax.color.duo').toHexString();
      setColors();
      atom.config.onDidChange('duotone-dark-syntax.color.uno', function(arg) {
        var newValue, oldValue;
        newValue = arg.newValue, oldValue = arg.oldValue;
        uno = newValue.toHexString();
        return setColors();
      });
      return atom.config.onDidChange('duotone-dark-syntax.color.duo', function(arg) {
        var newValue, oldValue;
        newValue = arg.newValue, oldValue = arg.oldValue;
        duo = newValue.toHexString();
        return setColors();
      });
    },
    deactivate: function() {
      return unsetColors();
    }
  };

  setColors = function() {
    var _duoHigh, _duoLow, _scaleDuo, _scaleUno, _unoHigh, _unoLow, _unoMid;
    unsetColors();
    _unoHigh = chroma.mix(uno, 'hsl(250, 0%, 100%)', 0.5);
    _unoMid = uno;
    _unoLow = chroma.mix(uno, 'hsl(250, 12%, 18%)', 0.75);
    _duoHigh = duo;
    _duoLow = chroma.mix(duo, 'hsl(250, 12%, 18%)', 0.66);
    _scaleUno = chroma.scale([_unoHigh, _unoMid, _unoLow]).colors(5);
    _scaleDuo = chroma.scale([_duoHigh, _duoLow]).colors(3);
    root.style.setProperty('--uno-1', _scaleUno[0]);
    root.style.setProperty('--uno-2', _scaleUno[1]);
    root.style.setProperty('--uno-3', _scaleUno[2]);
    root.style.setProperty('--uno-4', _scaleUno[3]);
    root.style.setProperty('--uno-5', _scaleUno[4]);
    root.style.setProperty('--duo-1', _scaleDuo[0]);
    root.style.setProperty('--duo-2', _scaleDuo[1]);
    root.style.setProperty('--duo-3', _scaleDuo[2]);
    return root.style.setProperty('--accent', duo);
  };

  unsetColors = function() {
    root.style.removeProperty('--uno-1');
    root.style.removeProperty('--uno-2');
    root.style.removeProperty('--uno-3');
    root.style.removeProperty('--uno-4');
    root.style.removeProperty('--uno-5');
    root.style.removeProperty('--duo-1');
    root.style.removeProperty('--duo-2');
    root.style.removeProperty('--duo-3');
    return root.style.removeProperty('--accent');
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvbXl1Z2EvLmF0b20vcGFja2FnZXMvZHVvdG9uZS1kYXJrLXN5bnRheC9saWIvZHVvdG9uZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxPQUFBLENBQVEsV0FBUjs7RUFFVCxJQUFBLEdBQU8sUUFBUSxDQUFDOztFQUNoQixHQUFBLEdBQU07O0VBQ04sR0FBQSxHQUFNOztFQUVOLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7SUFBQSxRQUFBLEVBQVUsU0FBQyxLQUFEO01BQ1IsR0FBQSxHQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQiwrQkFBaEIsQ0FBZ0QsQ0FBQyxXQUFqRCxDQUFBO01BQ04sR0FBQSxHQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQiwrQkFBaEIsQ0FBZ0QsQ0FBQyxXQUFqRCxDQUFBO01BQ04sU0FBQSxDQUFBO01BR0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFaLENBQXdCLCtCQUF4QixFQUF5RCxTQUFDLEdBQUQ7QUFDdkQsWUFBQTtRQUR5RCx5QkFBVTtRQUNuRSxHQUFBLEdBQU0sUUFBUSxDQUFDLFdBQVQsQ0FBQTtlQUNOLFNBQUEsQ0FBQTtNQUZ1RCxDQUF6RDthQUtBLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBWixDQUF3QiwrQkFBeEIsRUFBeUQsU0FBQyxHQUFEO0FBQ3ZELFlBQUE7UUFEeUQseUJBQVU7UUFDbkUsR0FBQSxHQUFNLFFBQVEsQ0FBQyxXQUFULENBQUE7ZUFDTixTQUFBLENBQUE7TUFGdUQsQ0FBekQ7SUFYUSxDQUFWO0lBZUEsVUFBQSxFQUFZLFNBQUE7YUFDVixXQUFBLENBQUE7SUFEVSxDQWZaOzs7RUFtQkYsU0FBQSxHQUFZLFNBQUE7QUFDVixRQUFBO0lBQUEsV0FBQSxDQUFBO0lBR0EsUUFBQSxHQUFXLE1BQU0sQ0FBQyxHQUFQLENBQVksR0FBWixFQUFpQixvQkFBakIsRUFBdUMsR0FBdkM7SUFDWCxPQUFBLEdBQVc7SUFDWCxPQUFBLEdBQVcsTUFBTSxDQUFDLEdBQVAsQ0FBWSxHQUFaLEVBQWlCLG9CQUFqQixFQUF1QyxJQUF2QztJQUVYLFFBQUEsR0FBVztJQUNYLE9BQUEsR0FBVyxNQUFNLENBQUMsR0FBUCxDQUFZLEdBQVosRUFBaUIsb0JBQWpCLEVBQXVDLElBQXZDO0lBR1gsU0FBQSxHQUFZLE1BQU0sQ0FBQyxLQUFQLENBQWEsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixPQUFwQixDQUFiLENBQTBDLENBQUMsTUFBM0MsQ0FBa0QsQ0FBbEQ7SUFDWixTQUFBLEdBQVksTUFBTSxDQUFDLEtBQVAsQ0FBYSxDQUFDLFFBQUQsRUFBb0IsT0FBcEIsQ0FBYixDQUEwQyxDQUFDLE1BQTNDLENBQWtELENBQWxEO0lBRVosSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFYLENBQXVCLFNBQXZCLEVBQWtDLFNBQVUsQ0FBQSxDQUFBLENBQTVDO0lBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFYLENBQXVCLFNBQXZCLEVBQWtDLFNBQVUsQ0FBQSxDQUFBLENBQTVDO0lBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFYLENBQXVCLFNBQXZCLEVBQWtDLFNBQVUsQ0FBQSxDQUFBLENBQTVDO0lBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFYLENBQXVCLFNBQXZCLEVBQWtDLFNBQVUsQ0FBQSxDQUFBLENBQTVDO0lBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFYLENBQXVCLFNBQXZCLEVBQWtDLFNBQVUsQ0FBQSxDQUFBLENBQTVDO0lBRUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFYLENBQXVCLFNBQXZCLEVBQWtDLFNBQVUsQ0FBQSxDQUFBLENBQTVDO0lBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFYLENBQXVCLFNBQXZCLEVBQWtDLFNBQVUsQ0FBQSxDQUFBLENBQTVDO0lBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFYLENBQXVCLFNBQXZCLEVBQWtDLFNBQVUsQ0FBQSxDQUFBLENBQTVDO1dBRUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFYLENBQXVCLFVBQXZCLEVBQW1DLEdBQW5DO0VBekJVOztFQTZCWixXQUFBLEdBQWMsU0FBQTtJQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBWCxDQUEwQixTQUExQjtJQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBWCxDQUEwQixTQUExQjtJQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBWCxDQUEwQixTQUExQjtJQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBWCxDQUEwQixTQUExQjtJQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBWCxDQUEwQixTQUExQjtJQUVBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBWCxDQUEwQixTQUExQjtJQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBWCxDQUEwQixTQUExQjtJQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBWCxDQUEwQixTQUExQjtXQUVBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBWCxDQUEwQixVQUExQjtFQVhZO0FBdkRkIiwic291cmNlc0NvbnRlbnQiOlsiY2hyb21hID0gcmVxdWlyZSAnY2hyb21hLWpzJ1xuXG5yb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG51bm8gPSAnJ1xuZHVvID0gJydcblxubW9kdWxlLmV4cG9ydHMgPVxuICBhY3RpdmF0ZTogKHN0YXRlKSAtPlxuICAgIHVubyA9IGF0b20uY29uZmlnLmdldCgnZHVvdG9uZS1kYXJrLXN5bnRheC5jb2xvci51bm8nKS50b0hleFN0cmluZygpXG4gICAgZHVvID0gYXRvbS5jb25maWcuZ2V0KCdkdW90b25lLWRhcmstc3ludGF4LmNvbG9yLmR1bycpLnRvSGV4U3RyaW5nKClcbiAgICBzZXRDb2xvcnMoKVxuXG4gICAgIyBDaGFuZ2UgVW5vXG4gICAgYXRvbS5jb25maWcub25EaWRDaGFuZ2UgJ2R1b3RvbmUtZGFyay1zeW50YXguY29sb3IudW5vJywgKHtuZXdWYWx1ZSwgb2xkVmFsdWV9KSAtPlxuICAgICAgdW5vID0gbmV3VmFsdWUudG9IZXhTdHJpbmcoKVxuICAgICAgc2V0Q29sb3JzKClcblxuICAgICMgQ2hhbmdlIER1b1xuICAgIGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlICdkdW90b25lLWRhcmstc3ludGF4LmNvbG9yLmR1bycsICh7bmV3VmFsdWUsIG9sZFZhbHVlfSkgLT5cbiAgICAgIGR1byA9IG5ld1ZhbHVlLnRvSGV4U3RyaW5nKClcbiAgICAgIHNldENvbG9ycygpXG5cbiAgZGVhY3RpdmF0ZTogLT5cbiAgICB1bnNldENvbG9ycygpXG5cbiMgQXBwbHkgQ29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5zZXRDb2xvcnMgPSAtPlxuICB1bnNldENvbG9ycygpICMgcHJldmVudHMgYWRkaW5nIGVuZGxlc3MgcHJvcGVydGllc1xuXG4gICMgQ29sb3IgbWl4aW5nXG4gIF91bm9IaWdoID0gY2hyb21hLm1peCggdW5vLCAnaHNsKDI1MCwgMCUsIDEwMCUpJywgMC41KTsgIyBtaXggd2l0aCB3aGl0ZVxuICBfdW5vTWlkICA9IHVubyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIHNldCBieSB1c2VyXG4gIF91bm9Mb3cgID0gY2hyb21hLm1peCggdW5vLCAnaHNsKDI1MCwgMTIlLCAxOCUpJywgMC43NSk7ICMgbWl4IHdpdGggYmFja2dyb3VuZCAoQHN5bnRheC1iZylcblxuICBfZHVvSGlnaCA9IGR1byAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIHNldCBieSB1c2VyXG4gIF9kdW9Mb3cgID0gY2hyb21hLm1peCggZHVvLCAnaHNsKDI1MCwgMTIlLCAxOCUpJywgMC42Nik7ICMgbWl4IHdpdGggYmFja2dyb3VuZCAoQHN5bnRheC1iZylcblxuICAjIENvbG9yIHNjYWxlc1xuICBfc2NhbGVVbm8gPSBjaHJvbWEuc2NhbGUoW191bm9IaWdoLCBfdW5vTWlkLCBfdW5vTG93XSkuY29sb3JzKDUpXG4gIF9zY2FsZUR1byA9IGNocm9tYS5zY2FsZShbX2R1b0hpZ2gsICAgICAgICAgIF9kdW9Mb3ddKS5jb2xvcnMoMylcblxuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXVuby0xJywgX3NjYWxlVW5vWzBdKVxuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXVuby0yJywgX3NjYWxlVW5vWzFdKVxuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXVuby0zJywgX3NjYWxlVW5vWzJdKSAjIDwtIHNldCBieSB1c2VyXG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tdW5vLTQnLCBfc2NhbGVVbm9bM10pXG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tdW5vLTUnLCBfc2NhbGVVbm9bNF0pXG5cbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kdW8tMScsIF9zY2FsZUR1b1swXSkgIyA8LSBzZXQgYnkgdXNlclxuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWR1by0yJywgX3NjYWxlRHVvWzFdKVxuICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWR1by0zJywgX3NjYWxlRHVvWzJdKVxuXG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tYWNjZW50JywgZHVvKVxuXG5cbiMgVW5zZXQgQ29sb3JzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG51bnNldENvbG9ycyA9IC0+XG4gIHJvb3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tdW5vLTEnKVxuICByb290LnN0eWxlLnJlbW92ZVByb3BlcnR5KCctLXVuby0yJylcbiAgcm9vdC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS11bm8tMycpXG4gIHJvb3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tdW5vLTQnKVxuICByb290LnN0eWxlLnJlbW92ZVByb3BlcnR5KCctLXVuby01JylcblxuICByb290LnN0eWxlLnJlbW92ZVByb3BlcnR5KCctLWR1by0xJylcbiAgcm9vdC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS1kdW8tMicpXG4gIHJvb3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tZHVvLTMnKVxuXG4gIHJvb3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tYWNjZW50JylcbiJdfQ==