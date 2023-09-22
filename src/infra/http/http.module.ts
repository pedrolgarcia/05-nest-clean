import { Module } from '@nestjs/common'

import { CreateAccountController } from '@/infra/http/controllers/create-account.controller'
import { AuthenticateController } from '@/infra/http/controllers/authenticate.controller'
import { CreateQuestionController } from '@/infra/http/controllers/create-question.controller'
import { FetchRecentQuestionsController } from '@/infra/http/controllers/fetch-recent-questions.controller'

import { PrismaService } from '@/infra/prisma/prisma.service'

@Module({
  controllers: [
    CreateAccountController,
    CreateQuestionController,
    FetchRecentQuestionsController,
    AuthenticateController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}
