import Controller from '../models/Controller';

export default class StudentsController extends Controller {
  static basePath = '/api/students';

  static mountController(app) {
    return new StudentsController(app);
  }

  initialize() {
    throw new Error('Method not implemented');
  }
}
