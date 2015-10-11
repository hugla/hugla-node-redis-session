"use strict";

const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

const HuglaRedisSession = require('./../index.js');

describe("HuglaRedisSession", function() {

  it("should call app#getModule with 'hugla-http' parameter", function() {
    const app = { config: {} };
    app.getModule = sinon.spy(function() {
      return { addMiddlewareSetupAction: function() {} };
    });
    const huglaRedisSession = new HuglaRedisSession(app);
    expect(app.getModule).to.have.been.calledWithExactly('hugla-http');
  });

  it("should call http#addMiddlewareSetupAction", function() {
    const spy = sinon.spy();
    const app = { config: {} };
    app.getModule = function() {
      return { addMiddlewareSetupAction: spy };
    };
    const huglaRedisSession = new HuglaRedisSession(app);
    expect(spy).to.have.been.called;
  });

  describe("#middlewareSetup()", function() {
    it("should call app#use", function() {
      const app = { config: {} };
      app.getModule = function() {
        return { addMiddlewareSetupAction: function() {} };
      };
      const spied = {};
      spied.use = sinon.spy();
      const huglaRedisSession = new HuglaRedisSession(app);
      huglaRedisSession.middlewareSetup(spied);
      expect(spied.use).to.have.callCount(1);
    });
  });
});
