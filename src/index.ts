type User = {
    id: number;
    name: string;
    email: string;
  };
  
  type Memory = {
    id: number;
    userId: number;
    title: string;
    tags: string[];
    importanceScore: number;
  };
  
  const users: User[] = [
    {
      id: 1,
      name: "Kapil",
      email: "kapil@example.com",
    },
  ];
  
  const memories: Memory[] = [
    {
      id: 101,
      userId: 1,
      title: "Learn TypeScript objects",
      tags: ["typescript", "objects"],
      importanceScore: 5,
    },
  ];

  memories.forEach((memory) => {
    const user = users.find((user) => user.id = memory.userId);
    if (!user){
        return
    }
    console.log(`${user.name} has memory: ${memory.title}`)
    console.log(`Tags: ${memory.tags.join(", ")}`)
    console.log(`Importance: ${memory.importanceScore}`)
  })