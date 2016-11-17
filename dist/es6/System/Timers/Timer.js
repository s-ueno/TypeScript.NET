import { ObservableBase } from "../Observable/ObservableBase";
export default class Timer extends ObservableBase {
    constructor(_interval, _maxCount = Infinity, _initialDelay = _interval) {
        super();
        this._interval = _interval;
        this._maxCount = _maxCount;
        this._initialDelay = _initialDelay;
        this._count = 0;
        if (_interval === null || _interval === void (0))
            throw "'interval' must be a valid number.";
        if (_interval < 0)
            throw "'interval' cannot be negative.";
    }
    static startNew(millisecondInterval, maxCount = Infinity, initialDelay = millisecondInterval) {
        const t = new Timer(millisecondInterval, maxCount, initialDelay);
        t.start();
        return t;
    }
    get isRunning() {
        return !!this._cancel;
    }
    get count() {
        return this._count;
    }
    start() {
        const _ = this;
        _.throwIfDisposed("This timer has been disposed and can't be reused.");
        if (!_._cancel && _._count < _._maxCount) {
            if (_._count || _._initialDelay == _._interval) {
                let i = setInterval(Timer._onTick, _._interval, _);
                _._cancel = () => {
                    clearInterval(i);
                };
            }
            else {
                let i = setTimeout(Timer._onTick, _._initialDelay, _, true);
                _._cancel = () => {
                    clearTimeout(i);
                };
            }
        }
    }
    stop() {
        this.cancel();
    }
    reset() {
        this.stop();
        this._count = 0;
    }
    complete() {
        this.cancel();
        this._onCompleted();
        return this._count;
    }
    cancel() {
        if (this._cancel) {
            this._cancel();
            this._cancel = null;
            return true;
        }
        return false;
    }
    _onDispose() {
        this.cancel();
        super._onDispose();
    }
    static _onTick(timer, reInitTimer) {
        const index = timer._count++, max = timer._maxCount, isComplete = timer._count >= max;
        if (reInitTimer) {
            timer.cancel();
            timer.start();
        }
        if (isComplete) {
            timer.stop();
        }
        if (index < max) {
            timer._onNext(index);
        }
        if (isComplete) {
            timer._onCompleted();
        }
    }
}
//# sourceMappingURL=Timer.js.map