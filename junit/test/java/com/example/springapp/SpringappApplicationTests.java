package com.example.springapp;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.example.springapp.model.Attendee;
import com.example.springapp.model.Event;
import com.example.springapp.model.Ticket;
import com.example.springapp.service.AttendeeService;
import com.example.springapp.service.EventService;
import com.example.springapp.service.TicketService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {

	 @Autowired
	    private MockMvc mockMvc;

	    private static final Date startDate=new Date(2023-05-25);
	    private static final Date endDate=new Date(2023- 05-22);

	    	    
	    @Mock
	    private AttendeeService attendeeService;
	    
	    @Mock
	    private EventService eventService;
	    
	    @Mock
	    private TicketService ticketService;
	    
	    Event event1= new Event(1L,"Music","Music concert by AR",startDate,endDate,"Chennai",20L);
	    Event event2= new Event(2L,"Dance","Dance show",startDate,endDate,"Trichy",30L);
	    Event event3= new Event(3L,"Dance","Dance show",startDate,endDate,"Trichy",30L);

	    
	    List<Event> listEvent= Arrays.asList(event1,event2,event3);
	    
	    String s1 = "{\"id\":1L,\"name\":\"Music\",\"description\":\"Music show\",\"startDate\":\"2023-05-12\",\"endDate\":\"2023-05-24\",\"location\":\"chennai\",\"totalTicket\": 20L}";
	    
	    private String asJsonString(Object object) throws JsonProcessingException {
	        ObjectMapper objectMapper = new ObjectMapper();                                   
	        return objectMapper.writeValueAsString(object);
	    }
	    
	    @Test
	    public void testCreateEvent() throws Exception {
	    	
	    	//Date date = java.sql.Date.valueOf(startDate);
	    	//event1.setStartDate(date);
	    
	        mockMvc.perform(MockMvcRequestBuilders.post("/event")
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(asJsonString(event1)))
	                .andExpect(MockMvcResultMatchers.status().isCreated());

	    }
	    
	    @Test
	    public void testGetEventAll() throws Exception {
	    	
	        Mockito.when(eventService.getAllEvent()).thenReturn(listEvent);

	        // Act
	        mockMvc.perform(get("/event"))
	        .andExpect(MockMvcResultMatchers.status().isOk())
	        .andDo(print())
            .andExpect(content().contentType("application/json"))
   			.andExpect(jsonPath("$").isArray())
   			.andReturn();
	    }
	    
	    @Test
	    public void testGetEventById() throws Exception {
	    	Long Id=1L;
	    	
	        Mockito.when(eventService.getEventById(Id)).thenReturn(event1);

	        // Act
	        mockMvc.perform(get("/event").param("id", "1"))
	        .andExpect(MockMvcResultMatchers.status().isOk())
	        .andDo(print())
            .andExpect(content().contentType("application/json"))
   			.andExpect(jsonPath("$").isArray())
   			.andReturn();
	    }

	    
	    
	    Attendee attendee1= new Attendee(1L,"ABC","abc@gmail.com","12345","Chennai",event1);
	    Attendee attendee2= new Attendee(2L,"xyz","xyz@gmail.com","12345","Chennai",event1);
      
	    List<Attendee> attendeeList =Arrays.asList(attendee1,attendee2);

	    
	    @Test
	    public void testGetAttendeeAll() throws Exception {
	    	
	        Mockito.when(attendeeService.getAllAttendee()).thenReturn(attendeeList);

	        // Act
	        mockMvc.perform(get("/attendee"))
	        .andExpect(MockMvcResultMatchers.status().isOk())
	        .andDo(print())
            .andExpect(content().contentType("application/json"))
   			.andExpect(jsonPath("$").isArray())
   			.andReturn();
	    }
	    
	    @Test
	    public void testGetAttendeeById() throws Exception {
	    	Long Id=1L;
	    	
	        Mockito.when(attendeeService.getAttendeeById(Id)).thenReturn(attendee1);

	        // Act
	        mockMvc.perform(get("/attendee").param("id", "1"))
	        .andExpect(MockMvcResultMatchers.status().isOk())
	        .andDo(print())
            .andExpect(content().contentType("application/json"))
   			.andExpect(jsonPath("$").isArray())
   			.andReturn();
	    }


	    @Test
	    public void testGetAttendeeByEventId() throws Exception {
	    	Long Id=1L;
	    	
	        Mockito.when(attendeeService.getAttendeeByEventId(Id)).thenReturn(attendeeList);

	        // Act
	        mockMvc.perform(get("/attendee").param("eventId", "1"))
	        .andExpect(MockMvcResultMatchers.status().isOk())
	        .andDo(print())
            .andExpect(content().contentType("application/json"))
   			.andExpect(jsonPath("$").isArray())
   			.andReturn();
	    }
	    

	    Ticket ticket1= new Ticket(1L,200D,"booked",event1,attendee1);
	    Ticket ticket2= new Ticket(2L,200D,"booked",event1,attendee2);
	    
	    List<Ticket> ticketList= Arrays.asList(ticket1,ticket2);
	    List<Ticket> ticketList1= Arrays.asList(ticket1);

	    
	    @Test
	    public void testGetTicketAll() throws Exception {
	    	
	        Mockito.when(ticketService.getAllTicket()).thenReturn(ticketList);

	        // Act
	        mockMvc.perform(get("/ticket"))
	        .andExpect(MockMvcResultMatchers.status().isOk())
	        .andDo(print())
            .andExpect(content().contentType("application/json"))
   			.andExpect(jsonPath("$").isArray())
   			.andReturn();
	    }
	    
	    @Test
	    public void testGetTicketById() throws Exception {
	    	Long Id=1L;
	    	
	        Mockito.when(ticketService.getTicketById(Id)).thenReturn(ticket1);

	        // Act
	        mockMvc.perform(get("/ticket").param("id", "1"))
	        .andExpect(MockMvcResultMatchers.status().isOk())
	        .andDo(print())
            .andExpect(content().contentType("application/json"))
   			.andExpect(jsonPath("$").isArray())
   			.andReturn();
	    }


	    @Test
	    public void testGetTicketByEventId() throws Exception {
	    	Long Id=1L;
	    	
	        Mockito.when(ticketService.getTicketByEventId(Id)).thenReturn(ticketList);

	        // Act
	        mockMvc.perform(get("/ticket").param("eventId", "1"))
	        .andExpect(MockMvcResultMatchers.status().isOk())
	        .andDo(print())
            .andExpect(content().contentType("application/json"))
   			.andExpect(jsonPath("$").isArray())
   			.andReturn();
	    }
	    
	    @Test
	    public void testGetTicketByAttendeeId() throws Exception {
	    	Long Id=1L;
	    	
	        Mockito.when(ticketService.getTicketByAttendeeId(Id)).thenReturn(ticketList1);

	        // Act
	        mockMvc.perform(get("/ticket").param("attendeeId", "1"))
	        .andExpect(MockMvcResultMatchers.status().isOk())
	        .andDo(print())
            .andExpect(content().contentType("application/json"))
   			.andExpect(jsonPath("$").isArray())
   			.andReturn();
	    }
	    
}
