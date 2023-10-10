import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { StorageModule } from '../storage/storage.module'

import { AuthenticateController } from './controllers/authenticate.controller'
import { RegisterStudentController } from './controllers/register-student.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { GetQuestionBySlugController } from './controllers/get-question-by-slug-controller'
import { EditQuestionController } from './controllers/edit-question.controller'
import { DeleteQuestionController } from './controllers/delete-question.controller'
import { AnswerQuestionController } from './controllers/answer-question.controller'
import { EditAnswerController } from './controllers/edit-answer.controller'
import { DeleteAnswerController } from './controllers/delete-answer.controller'
import { FetchQuestionAnswersController } from './controllers/fetch-question-answers.controller'
import { ChooseQuestionBestAnswerController } from './controllers/choose-question-best-answer.controller'
import { CommentOnQuestionController } from './controllers/comment-on-question.controller'
import { DeleteQuestionCommentController } from './controllers/delete-question-comment.controller'
import { CommentOnAnswerController } from './controllers/comment-on-answer.controller'
import { DeleteAnswerCommentController } from './controllers/delete-answer-comment.controller'
import { FetchQuestionCommentsController } from './controllers/fetch-question-comments.controller'
import { FetchAnswerCommentsController } from './controllers/fetch-answer-comments.controller'
import { UploadAttachmentsController } from './controllers/upload-attachment.controller'
import { ReadNotificationController } from './controllers/read-notification-controller'

import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/fetch-question-answers'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/choose-question-best-answer'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/comment-on-question'
import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-cases/delete-question-comment'
import { CommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/comment-on-answer'
import { DeleteAnswerCommentUseCase } from '@/domain/forum/application/use-cases/delete-answer-comment'
import { FetchQuestionCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-question-comments'
import { FetchAnswerCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-answer-comments'
import { UploadAndCreateAttachmentUseCase } from '@/domain/forum/application/use-cases/upload-and-create-attachment'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { ReadNotificationUseCase } from '@/domain/notification/application/use-cases/read-notification'

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule],
  controllers: [
    AuthenticateController,
    RegisterStudentController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
    CreateQuestionController,
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswersController,
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionCommentsController,
    FetchAnswerCommentsController,
    UploadAttachmentsController,
    ReadNotificationController,
  ],
  providers: [
    AuthenticateStudentUseCase,
    RegisterStudentUseCase,
    FetchRecentQuestionsUseCase,
    GetQuestionBySlugUseCase,
    CreateQuestionUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    FetchQuestionAnswersUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
    DeleteQuestionCommentUseCase,
    CommentOnAnswerUseCase,
    DeleteAnswerCommentUseCase,
    FetchQuestionCommentsUseCase,
    FetchAnswerCommentsUseCase,
    UploadAndCreateAttachmentUseCase,
    SendNotificationUseCase,
    ReadNotificationUseCase,
  ],
})
export class HttpModule {}
