using System.ComponentModel.DataAnnotations;

namespace MeetingManagment.Models
{
    public class TimeSlot
    {
        [Key]
        public int Id { get; set; }
        [Required]  
        public string Name { get; set; }
    }
}
