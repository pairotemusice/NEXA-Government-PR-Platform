/**
 * NEXA News Intelligence Service
 * Sprint 3.11 Service Binding Layer
 */

class NewsService {
  constructor(intelligenceRuntime) {
    this.intelligenceRuntime = intelligenceRuntime;
  }

  analyze(request) {
    return this.intelligenceRuntime.execute({
      module: "news-intelligence",
      input: request
    });
  }
}

module.exports = NewsService;