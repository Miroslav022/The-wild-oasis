import supabase from "./supabase";

export async function getAllMessages({ field, direction }) {
  console.log(direction);
  let {
    data: messages,
    error,
    count,
  } = await supabase
    .from("contacts")
    .select("*", { count: "exact" })
    .order(field, { ascending: direction === "asc" });

  if (error) throw new Error(error.message);
  return { messages, count };
}

export async function getMessage(id) {
  let { data: message, error } = await supabase
    .from("contacts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return message;
}

export async function DeleteMessage(id) {
  console.log(id);

  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
