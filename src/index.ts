type Memory = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  importanceScore: number;
  isArchived: boolean;
}

const memories: Memory[] = [
    {
        id: 1,
        title: "Learn TypeScript arrays",
        category: "learning",
        tags: ["typescript", "frontend"],
        importanceScore: 4,
        isArchived: false,
      },
      {
        id: 2,
        title: "Practice DSA trees",
        category: "interview",
        tags: ["dsa", "trees"],
        importanceScore: 5,
        isArchived: false,
      },
      {
        id: 3,
        title: "Read system design notes",
        category: "system-design",
        tags: ["architecture", "scalability"],
        importanceScore: 5,
        isArchived: true,
      },
    ];

for (const memory of memories) {
    console.log(`Memory: ${memory.title}, Category: ${memory.category}, Tags: ${memory.tags.join(", ")}, Importance: ${memory.importanceScore}, Archived: ${memory.isArchived}`);
}

const totalMemories = memories.length;
const archiveMemories = memories.filter(memory => memory.isArchived);
const highImportanceMemories = memories.filter(memory => memory.importanceScore >= 4);

console.log(`Total Memories: ${totalMemories}`);
console.log(`Archived Memories: ${archiveMemories.length}`);
console.log(`High Importance Memories: ${highImportanceMemories.length}`);