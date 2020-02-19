function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, 'next'); var callThrow = step.bind(null, 'throw'); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

/* eslint-env jasmine */

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _specHelpers = require('./../spec-helpers');

var _asyncSpecHelpers = require('../async-spec-helpers');

// eslint-disable-line

'use babel';describe('implements', function () {
  var impl = undefined;
  var editor = undefined;
  var gopath = undefined;
  var source = undefined;
  var target = undefined;

  (0, _asyncSpecHelpers.beforeEach)(_asyncToGenerator(function* () {
    _specHelpers.lifecycle.setup();

    gopath = _fsExtra2['default'].realpathSync(_specHelpers.lifecycle.temp.mkdirSync('gopath-'));
    process.env.GOPATH = gopath;

    source = _path2['default'].join(__dirname, '..', 'fixtures', 'implements');
    target = _path2['default'].join(gopath, 'src', 'implements');
    _fsExtra2['default'].copySync(source, target);
    yield _specHelpers.lifecycle.activatePackage();
    var mainModule = _specHelpers.lifecycle.mainModule;

    mainModule.provideGoConfig();
    impl = mainModule.loadImplements();
    impl.view = {};
    impl.view.update = jasmine.createSpy('update');
    impl.requestFocus = jasmine.createSpy('requestFocus').andReturn(Promise.resolve());

    editor = yield atom.workspace.open(_path2['default'].join(target, 'main.go'));
  }));

  afterEach(function () {
    _specHelpers.lifecycle.teardown();
  });

  (0, _asyncSpecHelpers.it)('updates the view when invoking guru', _asyncToGenerator(function* () {
    yield impl.handleCommand();
    expect(impl.view.update).toHaveBeenCalled();
  }));

  (0, _asyncSpecHelpers.it)('updates the view when guru fails', _asyncToGenerator(function* () {
    yield impl.handleCommand();
    expect(impl.view.update).toHaveBeenCalled();
    expect(impl.view.update.calls.length).toBe(2);

    var args0 = impl.view.update.calls[0].args[0];
    var args1 = impl.view.update.calls[1].args[0];
    expect(args0.startsWith('running guru')).toBe(true);
    expect(args1.startsWith('guru failed')).toBe(true);
  }));

  (0, _asyncSpecHelpers.it)('updates the view when guru succeeds', _asyncToGenerator(function* () {
    editor.setCursorBufferPosition([4, 9]);
    yield impl.handleCommand();
    expect(impl.view.update).toHaveBeenCalled();
    expect(impl.view.update.calls.length).toBe(2);

    var args0 = impl.view.update.calls[0].args[0];
    var args1 = impl.view.update.calls[1].args[0];
    expect(args0.startsWith('running guru')).toBe(true);

    expect(typeof args1).toBe('object');
    expect(args1.type.kind).toBe('struct');
    expect(args1.type.name).toBe('implements.Impl');
    expect(args1.from.length).toBe(2);
    expect(args1.from[0].name).toBe('implements.Fooer');
    expect(args1.from[1].name).toBe('io.Reader');
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL215dWdhLy5hdG9tL3BhY2thZ2VzL2dvLXBsdXMvc3BlYy9pbXBsZW1lbnRzL2ltcGxlbWVudHMtc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7dUJBR2UsVUFBVTs7OztvQkFDUixNQUFNOzs7OzJCQUNHLG1CQUFtQjs7Z0NBQ0csdUJBQXVCOzs7O0FBTnZFLFdBQVcsQ0FBQSxBQVFYLFFBQVEsQ0FBQyxZQUFZLEVBQUUsWUFBTTtBQUMzQixNQUFJLElBQUksWUFBQSxDQUFBO0FBQ1IsTUFBSSxNQUFNLFlBQUEsQ0FBQTtBQUNWLE1BQUksTUFBTSxZQUFBLENBQUE7QUFDVixNQUFJLE1BQU0sWUFBQSxDQUFBO0FBQ1YsTUFBSSxNQUFNLFlBQUEsQ0FBQTs7QUFFVixzREFBVyxhQUFZO0FBQ3JCLDJCQUFVLEtBQUssRUFBRSxDQUFBOztBQUVqQixVQUFNLEdBQUcscUJBQUcsWUFBWSxDQUFDLHVCQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtBQUM3RCxXQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7O0FBRTNCLFVBQU0sR0FBRyxrQkFBSyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUE7QUFDN0QsVUFBTSxHQUFHLGtCQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFBO0FBQy9DLHlCQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUE7QUFDM0IsVUFBTSx1QkFBVSxlQUFlLEVBQUUsQ0FBQTtRQUN6QixVQUFVLDBCQUFWLFVBQVU7O0FBQ2xCLGNBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtBQUM1QixRQUFJLEdBQUcsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFBO0FBQ2xDLFFBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ2QsUUFBSSxDQUFDLElBQUks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LENBQUE7QUFDdEMsVUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsVUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pDLFVBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ25ELFVBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtHQUM3QyxFQUFDLENBQUE7Q0FDSCxDQUFDLENBQUEiLCJmaWxlIjoiL2hvbWUvbXl1Z2EvLmF0b20vcGFja2FnZXMvZ28tcGx1cy9zcGVjL2ltcGxlbWVudHMvaW1wbGVtZW50cy1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcbi8qIGVzbGludC1lbnYgamFzbWluZSAqL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgbGlmZWN5Y2xlIH0gZnJvbSAnLi8uLi9zcGVjLWhlbHBlcnMnXG5pbXBvcnQgeyBpdCwgZml0LCBmZml0LCBiZWZvcmVFYWNoLCBydW5zIH0gZnJvbSAnLi4vYXN5bmMtc3BlYy1oZWxwZXJzJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmRlc2NyaWJlKCdpbXBsZW1lbnRzJywgKCkgPT4ge1xuICBsZXQgaW1wbFxuICBsZXQgZWRpdG9yXG4gIGxldCBnb3BhdGhcbiAgbGV0IHNvdXJjZVxuICBsZXQgdGFyZ2V0XG5cbiAgYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gICAgbGlmZWN5Y2xlLnNldHVwKClcblxuICAgIGdvcGF0aCA9IGZzLnJlYWxwYXRoU3luYyhsaWZlY3ljbGUudGVtcC5ta2RpclN5bmMoJ2dvcGF0aC0nKSlcbiAgICBwcm9jZXNzLmVudi5HT1BBVEggPSBnb3BhdGhcblxuICAgIHNvdXJjZSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICdmaXh0dXJlcycsICdpbXBsZW1lbnRzJylcbiAgICB0YXJnZXQgPSBwYXRoLmpvaW4oZ29wYXRoLCAnc3JjJywgJ2ltcGxlbWVudHMnKVxuICAgIGZzLmNvcHlTeW5jKHNvdXJjZSwgdGFyZ2V0KVxuICAgIGF3YWl0IGxpZmVjeWNsZS5hY3RpdmF0ZVBhY2thZ2UoKVxuICAgIGNvbnN0IHsgbWFpbk1vZHVsZSB9ID0gbGlmZWN5Y2xlXG4gICAgbWFpbk1vZHVsZS5wcm92aWRlR29Db25maWcoKVxuICAgIGltcGwgPSBtYWluTW9kdWxlLmxvYWRJbXBsZW1lbnRzKClcbiAgICBpbXBsLnZpZXcgPSB7fVxuICAgIGltcGwudmlldy51cGRhdGUgPSBqYXNtaW5lLmNyZWF0ZVNweSgndXBkYXRlJylcbiAgICBpbXBsLnJlcXVlc3RGb2N1cyA9IGphc21pbmVcbiAgICAgIC5jcmVhdGVTcHkoJ3JlcXVlc3RGb2N1cycpXG4gICAgICAuYW5kUmV0dXJuKFByb21pc2UucmVzb2x2ZSgpKVxuXG4gICAgZWRpdG9yID0gYXdhaXQgYXRvbS53b3Jrc3BhY2Uub3BlbihwYXRoLmpvaW4odGFyZ2V0LCAnbWFpbi5nbycpKVxuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiB7XG4gICAgbGlmZWN5Y2xlLnRlYXJkb3duKClcbiAgfSlcblxuICBpdCgndXBkYXRlcyB0aGUgdmlldyB3aGVuIGludm9raW5nIGd1cnUnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgaW1wbC5oYW5kbGVDb21tYW5kKClcbiAgICBleHBlY3QoaW1wbC52aWV3LnVwZGF0ZSkudG9IYXZlQmVlbkNhbGxlZCgpXG4gIH0pXG5cbiAgaXQoJ3VwZGF0ZXMgdGhlIHZpZXcgd2hlbiBndXJ1IGZhaWxzJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGltcGwuaGFuZGxlQ29tbWFuZCgpXG4gICAgZXhwZWN0KGltcGwudmlldy51cGRhdGUpLnRvSGF2ZUJlZW5DYWxsZWQoKVxuICAgIGV4cGVjdChpbXBsLnZpZXcudXBkYXRlLmNhbGxzLmxlbmd0aCkudG9CZSgyKVxuXG4gICAgY29uc3QgYXJnczAgPSBpbXBsLnZpZXcudXBkYXRlLmNhbGxzWzBdLmFyZ3NbMF1cbiAgICBjb25zdCBhcmdzMSA9IGltcGwudmlldy51cGRhdGUuY2FsbHNbMV0uYXJnc1swXVxuICAgIGV4cGVjdChhcmdzMC5zdGFydHNXaXRoKCdydW5uaW5nIGd1cnUnKSkudG9CZSh0cnVlKVxuICAgIGV4cGVjdChhcmdzMS5zdGFydHNXaXRoKCdndXJ1IGZhaWxlZCcpKS50b0JlKHRydWUpXG4gIH0pXG5cbiAgaXQoJ3VwZGF0ZXMgdGhlIHZpZXcgd2hlbiBndXJ1IHN1Y2NlZWRzJywgYXN5bmMgKCkgPT4ge1xuICAgIGVkaXRvci5zZXRDdXJzb3JCdWZmZXJQb3NpdGlvbihbNCwgOV0pXG4gICAgYXdhaXQgaW1wbC5oYW5kbGVDb21tYW5kKClcbiAgICBleHBlY3QoaW1wbC52aWV3LnVwZGF0ZSkudG9IYXZlQmVlbkNhbGxlZCgpXG4gICAgZXhwZWN0KGltcGwudmlldy51cGRhdGUuY2FsbHMubGVuZ3RoKS50b0JlKDIpXG5cbiAgICBjb25zdCBhcmdzMCA9IGltcGwudmlldy51cGRhdGUuY2FsbHNbMF0uYXJnc1swXVxuICAgIGNvbnN0IGFyZ3MxID0gaW1wbC52aWV3LnVwZGF0ZS5jYWxsc1sxXS5hcmdzWzBdXG4gICAgZXhwZWN0KGFyZ3MwLnN0YXJ0c1dpdGgoJ3J1bm5pbmcgZ3VydScpKS50b0JlKHRydWUpXG5cbiAgICBleHBlY3QodHlwZW9mIGFyZ3MxKS50b0JlKCdvYmplY3QnKVxuICAgIGV4cGVjdChhcmdzMS50eXBlLmtpbmQpLnRvQmUoJ3N0cnVjdCcpXG4gICAgZXhwZWN0KGFyZ3MxLnR5cGUubmFtZSkudG9CZSgnaW1wbGVtZW50cy5JbXBsJylcbiAgICBleHBlY3QoYXJnczEuZnJvbS5sZW5ndGgpLnRvQmUoMilcbiAgICBleHBlY3QoYXJnczEuZnJvbVswXS5uYW1lKS50b0JlKCdpbXBsZW1lbnRzLkZvb2VyJylcbiAgICBleHBlY3QoYXJnczEuZnJvbVsxXS5uYW1lKS50b0JlKCdpby5SZWFkZXInKVxuICB9KVxufSlcbiJdfQ==