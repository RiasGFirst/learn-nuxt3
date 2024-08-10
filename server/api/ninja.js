export default defineEventHandler(async (event) => {

    // handle query parameter
    const { name } = getQuery(event)

    // handle post request
    const { age } = await readBody(event)

    const { test } = useRuntimeConfig()
  
    return {
        message: `Hello ${name}, you're ${age} years old! And the key to enter the secret room is: ${test}}`
    }
})