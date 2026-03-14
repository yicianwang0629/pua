interface Env {
  GITHUB_CLIENT_ID: string
}

export const onRequestGet: PagesFunction<Env> = async ({ env, request }) => {
  const url = new URL(request.url)
  const redirectUri = `${url.origin}/api/auth/callback`
  const githubUrl = new URL("https://github.com/login/oauth/authorize")
  githubUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID)
  githubUrl.searchParams.set("redirect_uri", redirectUri)
  githubUrl.searchParams.set("scope", "read:user")
  return Response.redirect(githubUrl.toString(), 302)
}
