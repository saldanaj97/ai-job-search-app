import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import {
  ExistingJobApplication,
  JobApplicationDataCopy,
  JobApplicationInput,
} from '~/types/job-applications';

export const tableRouter = createTRPCRouter({
  getAllJobApplications: publicProcedure.query(async ({ ctx }) => {
    const { user } = await ctx.auth.getUser().then((res) => res.data);
    if (!user) {
      return { error: 'User is not authenticated' };
    }
    const jobApplications = await ctx.db.jobApplication.findMany({
      where: { user_id: user.id },
    });
    return { success: true, data: jobApplications };
  }),

  addNewJobApplication: publicProcedure
    .input(z.custom<JobApplicationInput>())
    .mutation(async ({ ctx, input }) => {
      const { user } = await ctx.auth.getUser().then((res) => res.data);
      if (!user) {
        return { error: 'User is not authenticated' };
      }
      try {
        await ctx.db.jobApplication.create({
          data: {
            ...input,
            user_id: user.id,
            followUpCount: input.followUpCount,
          },
        });
        return { success: true, message: 'Job application added!' };
      } catch (error) {
        return { error: (error as Error).message };
      }
    }),

  copyJobApplication: publicProcedure
    .input(z.custom<JobApplicationDataCopy>())
    .mutation(async ({ ctx, input }) => {
      const { user } = await ctx.auth.getUser().then((res) => res.data);
      if (!user) {
        return { error: 'User is not authenticated' };
      }
      try {
        await ctx.db.jobApplication.create({
          data: {
            ...input,
            user_id: user.id,
            followUpCount: input.followUpCount ?? undefined,
          },
        });
        return { success: true, message: 'Job application copied!' };
      } catch (error) {
        return { error: (error as Error).message };
      }
    }),

  watchJobApplication: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { user } = await ctx.auth.getUser().then((res) => res.data);
      if (!user) {
        return { error: 'User is not authenticated' };
      }
      try {
        await ctx.db.jobApplication.update({
          where: { id: input.id, user_id: user.id },
          data: { watching: true },
        });
        return { success: true, message: 'Job added to watch list!' };
      } catch (error) {
        return { error: (error as Error).message };
      }
    }),

  deleteJobApplication: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { user } = await ctx.auth.getUser().then((res) => res.data);
      if (!user) {
        return { error: 'User is not authenticated' };
      }
      try {
        await ctx.db.jobApplication.delete({
          where: { id: input.id, user_id: user.id },
        });
        return { success: true, message: 'Job application deleted!' };
      } catch (error) {
        return { error: (error as Error).message };
      }
    }),

  deleteManyJobApplications: publicProcedure
    .input(z.object({ ids: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      const { user } = await ctx.auth.getUser().then((res) => res.data);
      if (!user) {
        return { error: 'User is not authenticated' };
      }
      if (input.ids.length === 0) {
        return { error: 'No ids provided' };
      }
      try {
        await ctx.db.jobApplication.deleteMany({
          where: { id: { in: input.ids }, user_id: user.id },
        });
        return { success: true, message: 'Job applications deleted!' };
      } catch (error) {
        return { error: (error as Error).message };
      }
    }),

  updateJobApplication: publicProcedure
    .input(z.custom<ExistingJobApplication>())
    .mutation(async ({ ctx, input }) => {
      const { user } = await ctx.auth.getUser().then((res) => res.data);
      if (!user) {
        return { error: 'User is not authenticated' };
      }
      try {
        await ctx.db.jobApplication.update({
          where: { id: input.id, user_id: user.id },
          data: {
            ...input,
            created_at: input.created_at!, // Convert the created_at property to a valid type
          },
        });
        return { success: true, message: 'Job application updated!' };
      } catch (error) {
        return { error: (error as Error).message };
      }
    }),
});
