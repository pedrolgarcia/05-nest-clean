import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'
import { Comment } from '@/domain/forum/enterprise/entities/comment'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class CommentPresenter {
  static toHTTP(comment: Comment<QuestionComment | AnswerComment>) {
    return {
      id: comment.id.toString(),
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    }
  }
}
