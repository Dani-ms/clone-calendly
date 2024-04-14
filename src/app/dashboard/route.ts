import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    // const cookieStore = cookies()
    // const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    // const userRes = await supabase.auth.getUser()

    // if(userRes.error){
    //   return NextResponse.json({}, { status: 401 });
    // }

    // const user = userRes.data.user

    // user.
  return NextResponse.json({ hello: "world"}, { status: 200 })
}