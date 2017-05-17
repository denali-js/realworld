import { createMixin, attr } from 'denali';

export default createMixin((BaseModel) =>
  class TimestampedModel extends BaseModel {

    static createdAt = attr('date');
    static updatedAt = attr('date');

    save(...args) {
      if (!this.createdAt) {
        this.createdAt = new Date();
      }
      this.updatedAt = new Date();
      super.save(...args);
    }

  }
);
