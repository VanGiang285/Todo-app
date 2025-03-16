const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Tiêu đề công việc là bắt buộc'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed', 'failed'],
      default: 'pending',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    dueDate: {
      type: Date,
      required: [true, 'Ngày hạn là bắt buộc'],
    },
    dueTime: {
      type: String,
      required: [true, 'Giờ hạn là bắt buộc'],
      match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Giờ không hợp lệ (HH:MM)'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false, // Không bắt buộc vì không cần token
    },
  },
  {
    timestamps: true,
  }
);

TaskSchema.pre('find', function () {
  this.populate('user', 'name email');
});

TaskSchema.pre('findOne', function () {
  this.populate('user', 'name email');
});

module.exports = mongoose.model('Task', TaskSchema);