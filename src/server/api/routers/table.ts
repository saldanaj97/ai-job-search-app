import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const tableRouter = createTRPCRouter({
  getAllJobApplications: publicProcedure.query(async ({ ctx }) => {
    const { user } = await ctx.auth.getUser().then((res) => res.data);
    if (!user) {
      return {
        error: 'User is not authenticated',
      };
    }
    const jobApplications = await ctx.db.jobApplication.findMany({
      where: {
        user_id: user.id,
      },
    });

    return jobApplications ?? [];
  }),
});
